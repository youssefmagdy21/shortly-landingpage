import { useEffect, useState } from "react";
import Form from "./Form";
import ResultCard from "./ResultCard";
const STORAGE_KEY = "cardsData";

const FormSection = () => {
  const [cardsInfo, setCardsInfo] = useState([]);
  const [isNewDataSubmitted, setIsNewDataSubmitted] = useState(false);

  const saveDataToStorage = (key, data) => {
    const oldStorageData = sessionStorage.getItem(key)
      ? JSON.parse(sessionStorage.getItem(key))
      : [];
    sessionStorage.setItem(key, JSON.stringify([...oldStorageData, data]));
  };

  const getDataFromStorage = (key) => {
    const data = JSON.parse(sessionStorage.getItem(key));
    return data ? data : [];
  };

  useEffect(() => {
    const storageData = getDataFromStorage(STORAGE_KEY);
    setCardsInfo(storageData);
  }, [isNewDataSubmitted]);

  const setResults = (result) => {
    saveDataToStorage(STORAGE_KEY, result);
    setIsNewDataSubmitted(!isNewDataSubmitted);
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
