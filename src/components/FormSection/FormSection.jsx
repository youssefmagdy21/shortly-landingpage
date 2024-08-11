import { useState } from "react";
import Form from "./Form";
import ResultCard from "./ResultCard";
const FormSection = () => {
  const [cardsInfo, setCardsInfo] = useState([]);
  const setResults = (result) => {
    console.log(result);
    setCardsInfo((prev) => [...prev, result]);
  };
  return (
    <section className="bg-neutral-lightGray">
      <div className="px-6 md:px-16 lg:px-32 xl:px-40">
        <Form setResults={setResults} />
        <div className="mt-5 space-y-5 text-sm md:max-lg:text-base lg:text-lg">
          {cardsInfo?.map((card) => (
            <ResultCard
              key={card.cardID}
              inputUrl={card.inputUrl}
              shortenedUrl={card.shortenedUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default FormSection;
