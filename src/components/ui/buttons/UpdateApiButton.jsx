import { useContext, useEffect, useState } from "react";
import { ApiContext } from "../../../context/ApiContext";
import getData from "../../../services/RickAndMorty.Api";
import CharactersItems from "../../navbar/characters/CharactersItems";

export default function UpdateButton() {
  const { apiData, setApiData } = useContext(ApiContext);
  const [totalCharacters, setTotalCharacters] = useState(3);
  const [statusColor, setStatusColor] = useState("white");

  useEffect(() => {
    setTotalCharacters(apiData.length);
    // if(apiData[index].status === "Alive"){
    //   setStatusColor("red")
    // }
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
          Update
        </button>
        <p className="text-black mt-5">
          <strong>Total Characters:</strong> {totalCharacters}
        </p>
      </div>
      <div className="position-relative">
        <div
          className=" flex flex-column rounded-4 restaurant-card-2  position-absolute  "
          style={{ zIndex: 2 }}
        >
          <div className="position-relative pt-3" style={{ zIndex: 3 }}>
            {
              apiData.slice(0, 5).map((character) => {
                return <CharactersItems {...character} onlyPictures={false} />;
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <>
                <h4>{apiData[index].name}</h4>
                <div className="flex content-center justify-center my-1  border-b-2 text-center items-baseline ">
                  <i className={`fa fa-circle fa-fw fs-8 text-${statusColor}`} aria-hidden="true"></i>
                  <p className="flex  m-0">&nbsp; {apiData[index].status} &nbsp; </p>
                </div>
                <p>{apiData[index].species}</p>
              </> */
}

// import { useState } from "react"
// import { useAuth } from "../../../context/AuthContext"
// // import getData from "../../../services/RickAndMorty.Api"

// export default function UpdateButton(
//   {name_en,
//   itemVariants,
//   className}
// ) {
//   const { logout, user } = useAuth();
//   const [totalCharacters, setTotalCharacters] = useState(0)

// // const handleClick = async () => {
// //   const data = await getData()
// //   setTotalCharacters(data.length)
// // }

// // useEffect(async() => {
// //     const data = await getData()
// //     console.log(data.length)
// //       setApiData(data.length)

// //   setTotalCharacters(dataApi)
// // }, [])

//   return (
//     <>
//       <button
//           itemVariants={itemVariants}
//           transition={{ duration:0 }}
//           whileTap={{ scale: 0.97 }}
//           className={`${className}`}
//           // onClick={handleClick}
//         >
//           {name_en}
//         </button>

//       <p className="text-black mt-5">
//         <strong>Total Character:</strong>  {totalCharacters}
//       </p>
//     </>
//     )
// }
