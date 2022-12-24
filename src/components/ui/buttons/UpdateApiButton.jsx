import { useContext, useEffect, useState } from "react";
import { ApiContext } from "../../../context/ApiContext";
import getData from "../../../services/RickAndMorty.Api";

export default function UpdateButton() {
  const { apiData, setApiData } = useContext(ApiContext);
  const [totalCharacters, setTotalCharacters] = useState(3);

  useEffect(() => {
    setTotalCharacters(apiData.length);
  }, []);

  const handleClick = async () => {
    setTotalCharacters("...");
    const data = await getData();
    setTotalCharacters(apiData.length);
    setApiData(apiData);
  };

  return (
    <div className="max-w-xs m-auto">
      <div className="bg-rick&morty-june-bud border border-rick&morty-citron rounded px-8 pt-6 pb-8 mb-4">
        <button
          className="bg-black hover:bg-rick&morty-outer-space-crayola rounded py-2 px-4 text-rick&morty-june-bud"
          onClick={handleClick}
        >
          Update Data
        </button>
        <p className="text-black mt-5">
          <strong>Total Characters:</strong> {totalCharacters}
        </p>
      </div>
    </div>
  );
}