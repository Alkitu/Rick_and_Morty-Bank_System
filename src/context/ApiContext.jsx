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
    return (
    <>
    <div className="h-screen flex flex-col justify-center content-center align-middle">
      <div className='flex  align-middle items-center justify-center center flex-col col-span-2 '>
        <img src="/public/assets/images/Rick_and_Morty_loading.png" alt=""  className="w-1/4"/>
        {/* <p className="text-center font-bold m-auto ">Loading...</p>   */}
      </div>
    </div>
    </>
    )
    ;
  }

  return <ApiContext.Provider value={value}>{children}</ApiContext.Provider>;
}

export default ApiContextProvider;