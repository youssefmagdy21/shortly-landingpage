const Form = () => {
  return (
    // form container
    //     bg-shorten-mobile absolute -top-20 left-0 right-0 mx-auto flex min-h-40 items-center justify-center rounded-lg bg-primary-darkViolet bg-right-top bg-no-repeat p-6
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
  );
};
export default Form;
