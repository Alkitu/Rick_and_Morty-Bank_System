import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';

export default function CharactersItems({id, name, status, species, onlyPictures}) {
  const [statusColor, setStatusColor] = useState("white")
                  
  useEffect(() => {
    if(status === "Alive"){
      setStatusColor("green-500")
    } 

  }, [statusColor])

if (onlyPictures){
  return (
    <>
      <div className='m-2'>
        <img src={`https://rickandmortyapi.com/api/character/avatar/${id}.jpeg`} alt={name} className=' rounded-full shadow-md position-absolute top-0 max-w-full ' />
      </div>
    </>
    )
}

  return (
    <>
      <div key={id} className="shadow-xl bg-black mt-3 rounded-lg pb-5 w-full " >
      <img src={`https://rickandmortyapi.com/api/character/avatar/${id}.jpeg`} alt={name} className='p-5   rounded-full shadow-md position-absolute top-0' />
        <h4 className='border-b-2 px-3 pb-2 mx-5 text-lg font-bold text-center'>{name}</h4>
        <div className='px-3 pb-2 mx-5 flex ontent-center justify-center'>
          <div className="flex content-center justify-center my-1 text-center items-baseline ">
            <i className={`fa fa-circle fa-fw fs-8 text-green-500 text-${statusColor}`} aria-hidden="true"></i>
            <h4 className="flex m-0 "> {status} -</h4>
          </div>
          <div className="flex content-center justify-center my-1 text-center items-baseline ">
            <p className="flex m-0 ml-1" >{species}</p>
          </div>
        </div>
      </div> 
    </>
    )
}

CharactersItems.propTypes = {  
  onlyPictures: PropTypes.boolean  
}  
  
CharactersItems.defaultProps = {  
  onlyPictures: true  
}  