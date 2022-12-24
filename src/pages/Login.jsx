'use client'
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CharactersItems from "../components/characters/CharactersItems";
import { ApiContext } from "../context/ApiContext";
import { useAuth } from "../context/AuthContext";
import { Alert } from "./Alert";



export function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { login, loginWithGoogle, resetPassword } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { apiData, setApiData } = useContext(ApiContext);
  const [randomNumber, setRandomNumber]= useState(3);
  const [endNumber, setEndNumber]  = useState(randomNumber + 12);

  useEffect(() => {
    const number1 = Math.floor(Math.random() * ((apiData.length - 12) - 2 + 1) + 2);
    setRandomNumber(number1)
    setEndNumber(number1 + 12)

}, [])



//  console.log(number1)
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





  return (
    <div className="grid grid-col-1 w-full m-auto ">
      <div className="w-full max-w-xs m-auto h-screen pt-20">
        <h1 className="text-2xl font-bold text-center text-rick&morty-pacific-blue">WELCOME TO MY BANK</h1>
        <h2 className="text-lg  text-center">Rick and @LuisEUM</h2>          
        <div className=" max-w-xs  grid grid-cols-2 my-5">
              {
                apiData.slice(0, 2).map((character) => {
                  return <CharactersItems {...character} onlyPictures={true} />;
                })
              }
        </div>

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

      </div>
      <div className="pb-20">
      <div className="max-w-2xl  m-auto px-10">
        <h3 className="text-2xl text-justify ">"Meet some other dumbs that use this fraud...  <br/>I mean bank. <br/> <br/>Every time that you came back I will introduce you to others, but don't come back"
          <p className="text-lg  text-end">- Rick Sanchez</p>     
        </h3>          
      </div>


        <div className="px-5 max-w-3xl gap-3 grid grid-cols-3 my-5 m-auto">
              {apiData.slice(randomNumber, endNumber).map((character) => {
                  return <CharactersItems {...character} onlyPictures={false} />;
                })
              }
        </div>
      </div>
    </div>
  );
}
