import { useAuth } from "../../../context/AuthContext";

export default function LogoutButton() {
  const { logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <button className="flex w-1/2 justify-center text-center bg-black hover:bg-rick&morty-outer-space-crayola rounded py-2 px-4 text-rick&morty-june-bud" onClick={handleLogout}>
      Logout
    </button>
  )

}
