import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const API_BASE_URL = "https://spoo.me/";

const Form = ({ setResults }) => {
  const [inputUrl, setInputUrl] = useState("");
  const [isInputEmpty, setIsInputEmpty] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isInvalidUrl, setIsInvalidUrl] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    try {
      if (!inputUrl) {
        setIsInputEmpty(true);
        throw new Error("empty input!\nPlease enter a link");
      }
      setIsLoading(true);
      e.target.submitBtn.disabled = true;
      fetch(API_BASE_URL, {
        method: "POST",
        body: `url=${encodeURI(inputUrl)}`,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
        .then((res) => {
          return res.ok ? res.json() : Promise.reject(res);
        })
        .then((data) => {
          const shortenedUrl = data.short_url;
          setResults({
            cardID: uuidv4(),
            inputUrl: inputUrl,
            shortenedUrl: shortenedUrl,
          });
          setInputUrl("");
          setIsLoading(false);
          e.target.submitBtn.disabled = false;
        })
        .catch((res) => {
          setIsLoading(false);
          e.target.submitBtn.disabled = false;
          res.json().then((content) => {
            if (content.UrlError) setIsInvalidUrl(true);
          });
        });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="-mb-20 flex -translate-y-20 items-center justify-center rounded-lg bg-primary-darkViolet bg-shorten-mobile bg-right-top bg-no-repeat p-6 md:bg-shorten-desktop md:bg-cover md:px-14 md:py-12">
      <form
        className="flex w-full flex-col gap-3 md:flex-row md:gap-5"
        onSubmit={handleFormSubmit}
      >
        <div className="relative md:flex-1">
          <input
            type="text"
            name="inputUrl"
            value={inputUrl}
            onChange={(e) => {
              setInputUrl(e.target.value.trim());
              setIsInvalidUrl(false);
              setIsInputEmpty(false);
            }}
            placeholder="Shorten a link here..."
            className={`w-full rounded-md px-4 py-2 placeholder:text-sm placeholder:text-neutral-grayishViolet placeholder:opacity-70 focus-visible:outline-primary-cyan focus-visible:ring-0 md:rounded-lg md:px-7 md:py-[0.875rem] md:placeholder:text-base ${(isInputEmpty || isInvalidUrl) && "ring-2 ring-inset ring-secondary-red placeholder:text-secondary-red placeholder:opacity-50"}`}
          />
          {isInputEmpty ? (
            <p className="-bottom-7 mt-1 text-xs italic leading-4 text-secondary-red md:absolute md:mt-0 md:text-sm">
              Please add a link
            </p>
          ) : isInvalidUrl ? (
            <p className="-bottom-7 mt-1 text-xs italic leading-4 text-secondary-red md:absolute md:mt-0 md:text-sm">
              Please enter a valid link
            </p>
          ) : (
            <></>
          )}
        </div>
        <button
          type="submit"
          name="submitBtn"
          className="rounded-md bg-primary-cyan py-[0.6em] text-base font-bold leading-normal text-white transition-colors duration-300 ease-in-out hover:bg-primary-lightCyan md:rounded-lg md:px-10 md:py-0"
        >
          {!isLoading ? "Shorten It!" : "Loading..."}
        </button>
      </form>
    </div>
  );
};
export default Form;
