import axios from "axios";

export default async function getData () {
  // const aver = getUsers()

  var returnArray = [];

  function getDataFromAPI(count){
    return axios.get(`https://rickandmortyapi.com/api/character?page=${count}`).then(function(response){
      returnArray = returnArray.concat(response.data.results);
      return getDataFromAPI(count +1);
    }
    ).catch(function() {
      return returnArray;
    }
  )}
  await getDataFromAPI(1)

  console.log(returnArray)

  return returnArray
};