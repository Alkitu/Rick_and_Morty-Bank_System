import { useContext, useEffect, useState } from "react";
import { ApiContext } from "../../../context/ApiContext"
import getData from "../../../services/RickAndMorty.Api";

export default function UpdateButton() {
  const  {apiData}  = useContext(ApiContext);

  console.log('luise',apiData)
  const [totalCharacters, setTotalCharacters] = useState(3)

  useEffect(() => {
    setTotalCharacters(apiData.length)
  

  }, [])
    
  const handleClick = async () => {
    setTotalCharacters("...")
    const data = await getData()
    setTotalCharacters(apiData.length)
  }
  

  return (
    <div className="max-w-xs m-auto">
      <div className="bg-rick&morty-june-bud border border-rick&morty-citron rounded px-8 pt-6 pb-8 mb-4">
        <button className="bg-black hover:bg-rick&morty-outer-space-crayola rounded py-2 px-4 text-rick&morty-june-bud" onClick={handleClick} >
          Update
        </button>
        <p className="text-black mt-5">
        <strong>Total Characters:</strong> {totalCharacters}
      </p>
      </div>
    </div>
  );
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

