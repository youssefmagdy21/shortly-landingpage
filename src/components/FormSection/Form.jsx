import { useState } from "react";

const Form = ({ setResults }) => {
  const [inputUrl, setInputUrl] = useState("");
  const [cardInfo, setCardInfo] = useState({
    cardID: NaN,
    inputUrl: "",
    shortenedUrl: "",
  });
  const [isInputEmpty, setIsInputEmpty] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    try {
      if (!inputUrl) {
        setIsInputEmpty(true);
        throw "empty input!\nPlease enter a link";
      }
      setIsInputEmpty(false);
      setResults(cardInfo);
      console.log(`submitted ${inputUrl}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    // form container
    <div className="bg-shorten-mobile md:bg-shorten-desktop -mb-20 flex -translate-y-20 items-center justify-center rounded-lg bg-primary-darkViolet bg-right-top bg-no-repeat p-6 md:bg-cover md:px-14 md:py-12">
      <form
        className="flex w-full flex-col gap-3 md:flex-row md:gap-5"
        onSubmit={handleFormSubmit}
      >
        <div className="relative md:flex-1">
          <input
            type="text"
            name="inputUrl"
            value={inputUrl}
            onChange={(e) => setInputUrl(e.target.value.trim())}
            placeholder="Shorten a link here..."
            className={`w-full rounded-md px-4 py-2 placeholder:text-sm placeholder:text-neutral-grayishViolet placeholder:opacity-70 focus-visible:outline-primary-cyan focus-visible:ring-0 md:rounded-lg md:px-7 md:py-[0.875rem] md:placeholder:text-base ${isInputEmpty && "ring-2 ring-inset ring-secondary-red placeholder:text-secondary-red placeholder:opacity-50"}`}
          />
          {isInputEmpty && (
            <p className="-bottom-7 mt-1 text-xs italic leading-4 text-secondary-red md:absolute md:mt-0 md:text-sm">
              Please add a link
            </p>
          )}
        </div>
        <button
          type="submit"
          className="rounded-md bg-primary-cyan py-[0.6em] text-base font-bold leading-normal text-white transition-colors duration-300 ease-in-out hover:bg-primary-lightCyan md:rounded-lg md:px-10 md:py-0"
        >
          Shorten It!
        </button>
      </form>
    </div>
  );
};
export default Form;
