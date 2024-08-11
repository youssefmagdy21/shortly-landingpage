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
            <button className="rounded-md bg-primary-cyan py-[0.625em] text-base font-bold text-white transition-colors duration-300 ease-in-out hover:bg-primary-lightCyan">
              Shorten It!
            </button>
          </form>
        </div>

        {/* output element */}
        <div className="mt-5 bg-white">
          <div>
            <p className="overflow-hidden text-ellipsis whitespace-nowrap">
              https://www.frontendmentor.io
            </p>
          </div>
          <div>
            <a href="/">https://rel.ink/k4lKyk</a>
            <button className="block">copy</button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default FormSection;
