import { useAuth } from "../context/AuthContext";

export function Home() {
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
        <p className="text-xl mb-4">Welcome back <strong>{user.displayName || user.email}</strong> </p>
        <button className="bg-black hover:bg-rick&morty-outer-space-crayola rounded py-2 px-4 text-rick&morty-june-bud" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}
