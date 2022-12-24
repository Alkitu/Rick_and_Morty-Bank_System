import LogoutButton from "../components/ui/buttons/LogoutButton";
import { useAuth } from "../context/AuthContext";

export function Info () {
  const { logout, user } = useAuth();

  console.log(user);
  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error(error.message);
    }
  };


  return (
    <div className="w-full max-w-xs m-auto text-black">
      <div className="bg-rick&morty-june-bud shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className='flex items-center justify-center flex-col'>
          {user.photoURL ? <img src={user.photoURL} alt={user.displayName} className=' rounded-full shadow-md position-absolute top-0 max-w-full ' /> : <img src='https://rickandmortyapi.com/api/character/avatar/1.jpeg' alt={user.displayName} className=' rounded-full shadow-md position-absolute top-0 max-w-full ' /> }
          <p className="text-md mb-4 text-center">Do you want want to scape coward? <br/> <strong>{user.displayName || user.email}</strong> </p>
          <LogoutButton/>
        </div>
      </div>
    </div>
  );
}
