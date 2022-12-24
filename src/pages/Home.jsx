import { useEffect, useState } from "react";
import SimpleList from "../components/ui/list/SimpleList";
import { useAuth } from "../context/AuthContext";
import { getUsers } from "../services/firestore";

export function Home() {
  const { user } = useAuth();
  const [userData, setUserData] = useState('')

  useEffect(() => {
    async function fetchData() {
      const user = await getUsers()
      console.log(user)

      setUserData(user)

    }
    fetchData();
  

  }, [])



  return (
    <>
      <div className="w-full max-w-md m-auto text-black py-10">
        <div className="bg-rick&morty-june-bud shadow-md rounded px-8 pt-6 pb-8 mb-4 grid grid-cols-6 gap-6">
          <div className='flex items-center justify-center flex-col col-span-2 '>
            {user.photoURL ? <img src={user.photoURL} alt={user.displayName} className=' rounded-full shadow-md max-w-full ' /> : <img src='https://rickandmortyapi.com/api/character/avatar/1.jpeg' alt={user.displayName} className=' rounded-full shadow-md max-w-full ' /> }
          </div>
          <div className="col-span-4 flex items-center justify-center px-4">
            <h1 className="text-md mb-4 text-left ">Wubba Lubba Dub Dub <br/> para ti... <strong>{user.displayName || user.email}</strong></h1>
          </div>


          <div className=" w-full  col-span-6 mt-1">
            <div className=" shadow-xl ">
              <h2 className="font-bold py-2 text-center border-rick&morty-citron border-2 rounded-t-lg border-b-0 bg-rick&morty-outer-space-crayola text-neutral-100">Bank Account Number:</h2>
              <div className="bg-black rounded-b-lg py-1 border-black border-2 border-t-0 ">
                <p className="text-center text-neutral-100 ">1112 2334 4543 12654</p>
              </div>
            </div>

          </div>

          <div className="w-full col-span-2">
            <button className="bg-rick&morty-pacific-blue hover:bg-rick&morty-outer-space-crayola rounded-xl w-full py-1">
                  <p className="text-center text-neutral-100 shadow-xl ">Deposit</p>
            </button>
          </div>

          <div className="w-full col-span-2">
            <button className="bg-rick&morty-pacific-blue hover:bg-rick&morty-outer-space-crayola rounded-xl w-full py-1">
              <p className="text-center text-neutral-100 shadow-xl">Withdrawal</p>
            </button>
          </div>
          
          <div className="w-full col-span-2">
            <button className="bg-rick&morty-pacific-blue hover:bg-rick&morty-outer-space-crayola rounded-xl w-full py-1">
              <p className="text-center text-neutral-100 shadow-xl">Transfer</p>
            </button>
          </div>

          <div className="w-full col-span-6 mt-1">
            <h3 className="font-bold py-2 text-neutral-100 text-center bg-rick&morty-outer-space-crayola border-rick&morty-outer-space-crayola border-2 rounded-t-lg border-b-0">
              Account History:
            </h3>
            <div className=" shadow-xl flex flex-col align-middle bg-black border-rick&morty-outer-space-crayola border-b-2 rounded-b-lg">
              <SimpleList/>
              <SimpleList/>
              <SimpleList/>
              <div className="bg-rick&morty-outer-space-crayola rounded-b-lg pb-2 pt-3 border-rick&morty-outer-space-crayola border-2 border-t-0 grid grid-cols-12 px-5  ">
                <div className="col-span-12">
                  <p className="text-center text-neutral-100  font-bold">See more...</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full col-span-6 mt-1">
            <h3 className="font-bold py-2 text-neutral-100 text-center bg-rick&morty-outer-space-crayola border-rick&morty-outer-space-crayola border-2 rounded-t-lg border-b-0">
              Loans History:
            </h3>
            <div className=" shadow-xl flex flex-col align-middle bg-black border-rick&morty-outer-space-crayola border-b-2 rounded-b-lg">
              <SimpleList/>
              <SimpleList/>
              <SimpleList/>
              <div className="bg-rick&morty-outer-space-crayola rounded-b-lg pb-2 pt-3 border-rick&morty-outer-space-crayola border-2 border-t-0 grid grid-cols-12 px-5  ">
                <div className="col-span-12">
                  <p className="text-center text-neutral-100  font-bold">See more...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>


  );
}
