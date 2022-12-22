'use client'
import { async } from "@firebase/util";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { getUsers } from "../services/firestore";
import { Alert } from "./Alert";

export function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { login, loginWithGoogle, resetPassword } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();

// useEffect(async () => {
//   try {
//     const querySnapshot = await getDocs(collection(db, 'users'))
//   } catch (error) {
//     console.log(error)
//   }
// }, [])


  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(user.email, user.password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleChange = ({ target: { value, name } }) =>
    setUser({ ...user, [name]: value });

  const handleGoogleSignin = async () => {
    try {
      await loginWithGoogle();
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (!user.email) return setError("Write an email to reset password");
    try {
      await resetPassword(user.email);
      setError('We sent you an email. Check your inbox')
    } catch (error) {
      setError(error.message);
    }
  };

//this is the function that brings all the data from the api

  const testingFunction = async () => {
    const aver = getUsers()
  
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
  };


  // const [usuario, setUsuario] = useState(null);

  // const handleClick = async () => {
  //   const usuario = await getUsers();
  //   setUsuario(usuario);
  // };


  return (
    <div className="w-full max-w-xs m-auto">
      {error && <Alert message={error} />}
      
      <form
        onSubmit={handleSubmit}
        className="bg-rick&morty-june-bud shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="youremail@company.tld"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="*************"
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            className="bg-black hover:bg-rick&morty-outer-space-crayola text-rick&morty-june-bud font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign In
          </button>
          <a
            className="inline-block align-baseline font-bold text-sm text-black hover:text-rick&morty-outer-space-crayola"
            href="#!"
            onClick={handleResetPassword}
          >
            Forgot Password?
          </a>
        </div>
      </form>
      <button
        onClick={handleGoogleSignin}
        className="bg-rick&morty-pacific-blue hover:bg-rick&morty-outer-space-crayola text-white  shadow rounded border-2 border-rick&morty-pacific-blue hover:border-rick&morty-outer-space-crayola py-2 px-4 w-full"
      >
        Google login
      </button>
      <p className="my-4 text-sm flex justify-between px-3">
        Don't have an account?
        <Link to="/register" className="text-rick&morty-pacific-blue hover:text-rick&morty-blue-sapphire hover:ring-offset-rick&morty-blue-sapphire">
          Register
        </Link>
      </p>
        <button className="bg-white text-black" onClick={testingFunction}>
          Luis 
        </button>
            {/* <div>
          <button className="bg-white text-black" onClick={handleClick}>Obtener usuarios</button>
          {usuario && usuario.map(user => (
            <div key={user.id} className='text-white'>{user.name}</div>
          ))}
        </div> */}

    </div>
  );
}
