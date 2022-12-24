import React from 'react'

export default function SimpleItem() {
  return (
    <div className="bg-black pb-2 pt-3 border-black border-2 border-t-0 grid grid-cols-12 px-5 border-b-stone-700 ">
      <div className="col-span-10">
        <p className="text-left text-white"><strong>From:</strong> <span>Rick Sanchez</span> </p>
        <p className="text-left text-white"><strong>Concept:</strong> Deposit</p>
        <p className="text-left text-white"><strong>Amount:</strong> <span>+ 34€</span> </p>
      </div>
      <div className='flex  align-middle items-center justify-center center flex-col col-span-2 '>
      <img src='https://rickandmortyapi.com/api/character/avatar/1.jpeg' alt={'Rick Sanchez'} className=' rounded-full shadow-md max-w-full ' /> 
        {/* {user.photoURL ? <img src={user.photoURL} alt={user.displayName} className=' rounded-full shadow-md top-0 max-w-full' /> : <img src='https://rickandmortyapi.com/api/character/avatar/1.jpeg' alt={user.displayName} className=' rounded-full shadow-md max-w-full ' /> } */}
      </div>
    </div>
  )
}

