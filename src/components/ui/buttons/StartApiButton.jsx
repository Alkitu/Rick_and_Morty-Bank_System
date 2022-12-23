// Note for myself, this button is deprecated :D, su uso es solo para probar la primera llamada a la API, ahora funciona desde el contexto
import {  useState } from "react"
import getData from "../../../services/RickAndMorty.Api"

export default function StartButton(
  {name_en,
  itemVariants,
  className}
) {
  const [totalCharacters, setTotalCharacters] = useState(0)

const handleClick = async () => {
  const data = await getData()
  setTotalCharacters(data.length)
}


  return (
    <>
      <button
          itemVariants={itemVariants}
          transition={{ duration:0 }}
          whileTap={{ scale: 0.97 }} 
          className={`${className}`} 
          onClick={handleClick}>
          {name_en}
        </button>

      <p className="text-black mt-5">
        <strong>Total Character:</strong>  {totalCharacters}
      </p>
    </>
    )
}

