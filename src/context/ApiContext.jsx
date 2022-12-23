import { createContext, useState, useEffect } from "react";
import getData from "../services/RickAndMorty.Api";
// import { Navigate } from "react-router-dom";
// import { getProfile } from "../services/top-restaurant-service";

export const ApiContext = createContext();

function ApiContextProvider({ children }) {
  const [apiData, setApiData] = useState(undefined); // undefined means loading




  useEffect(() => {
    async function fetchData() {
      const data = await getData();

      setApiData(data)

    }
    fetchData();
  }, []);
    
  const value = {
    apiData,
    setApiData
  };



  if (apiData === undefined) {
    return <p>Loading...</p>;
  }

  return <ApiContext.Provider value={value}>{children}</ApiContext.Provider>;
}

export default ApiContextProvider;