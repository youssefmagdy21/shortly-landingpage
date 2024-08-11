const FormSection = () => {
  // px-6 py-8 md:px-16 md:py-11 lg:px-32 xl:px-40

  return (
    <section className="bg-neutral-lightGray">
      {/* container */}
      <div className="relative mx-auto max-w-[88vw] pt-20">
        {/* form container */}
        <div className="bg-shorten-mobile absolute -top-20 left-0 right-0 flex min-h-40 items-center justify-center rounded-lg bg-primary-darkViolet bg-right-top bg-no-repeat p-6">
          <form className="flex w-full flex-col gap-3">
            <div>
              <input
                type="text"
                placeholder="Shorten a link here..."
                className="w-full rounded-md px-4 py-2 placeholder:text-sm placeholder:text-neutral-grayishViolet"
              />
              {/* to add validation styles */}
              {/*  ring-2 ring-inset ring-secondary-red placeholder:text-secondary-red*/}
              {/* <p className="mt-1 text-[10px] italic leading-4 text-secondary-red">
                Please add a link
              </p> */}
            </div>
            <button className="rounded-md bg-primary-cyan py-[0.6em] text-base font-bold text-white transition-colors duration-300 ease-in-out hover:bg-primary-lightCyan">
              Shorten It!
            </button>
          </form>
        </div>

        {/* output elements container */}
        <div className="mt-5 space-y-5 text-sm">
          {/* element */}
          <div className="block rounded-md bg-white shadow-sm">
            <div className="border-b border-neutral-grayishViolet border-opacity-30 px-4 py-3">
              <p className="overflow-hidden text-ellipsis whitespace-nowrap text-neutral-darkViolet">
                https://www.frontendmentor.io
              </p>
            </div>
            <div className="px-4 py-3">
              <a
                href="/"
                className="text-primary-cyan transition-colors duration-300 ease-in-out hover:text-neutral-darkViolet"
              >
                https://rel.ink/k4lKyk
              </a>
              <button className="mt-3 block w-full rounded-md bg-primary-cyan py-[0.6em] font-bold text-white transition-colors duration-300 ease-in-out hover:bg-primary-lightCyan">
                Copy
              </button>
            </div>
          </div>

          <div className="block rounded-md bg-white shadow-sm">
            <div className="border-b border-neutral-grayishViolet border-opacity-30 px-4 py-3">
              <p className="overflow-hidden text-ellipsis whitespace-nowrap text-neutral-darkViolet">
                https://www.frontendmentor.io/sometext/to/test/warpping
              </p>
            </div>
            <div className="px-4 py-3">
              <a
                href="/"
                className="text-primary-cyan transition-colors duration-300 ease-in-out hover:text-neutral-darkViolet"
              >
                https://rel.ink/k4lKyk
              </a>
              <button className="mt-3 block w-full rounded-md bg-primary-darkViolet py-[0.6em] font-bold text-white">
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
