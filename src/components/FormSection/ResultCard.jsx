import { useState } from "react";

const ResultCard = ({ inputUrl, shortenedUrl }) => {
  const [isLinkCopied, setIsLinkCopied] = useState(false);
  const handleLinkCopy = async (e) => {
    try {
      await navigator.clipboard.writeText(shortenedUrl);
      setIsLinkCopied(true);
      e.target.disabled = true;
      setTimeout(() => {
        setIsLinkCopied(false);
        e.target.disabled = false;
      }, 5000);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="block gap-6 rounded-md bg-white shadow-sm md:flex md:items-center md:justify-between md:px-6 md:py-4">
      <p className="overflow-hidden text-ellipsis whitespace-nowrap border-b border-neutral-grayishViolet border-opacity-30 px-4 py-3 text-neutral-darkViolet md:border-none md:p-0">
        {inputUrl}
      </p>
      <div className="block px-4 py-3 md:flex md:items-center md:gap-6 md:p-0">
        <a
          href={shortenedUrl}
          target="_blank"
          className="text-primary-cyan transition-colors duration-300 ease-in-out hover:text-neutral-darkViolet"
        >
          {shortenedUrl}
        </a>
        <button
          className={`mt-3 block w-full rounded-md ${isLinkCopied ? "bg-primary-darkViolet" : "bg-primary-cyan hover:bg-primary-lightCyan"} py-[0.5rem] font-bold text-white transition-colors duration-300 ease-in-out md:mt-0 md:px-7 md:text-base`}
          onClick={handleLinkCopy}
        >
          {isLinkCopied ? "Copied!" : "Copy"}
        </button>
      </div>
    </div>
  );
};

export default ResultCard;
