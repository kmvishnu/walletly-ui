import { useAuth } from "@/hooks/useAuthHook";
import { User as UserIcon } from "lucide-react";

const UserComponent = () => {
  const { logout, user, loading } = useAuth();

  const handleLogout = () => {
    logout();
  };

  if (loading) {
    return (
      <div className="w-full flex-grow flex items-center justify-center mb-24">
        Loading...
      </div>
    );
  }

  if (!user) {
    return (
      <div className="w-full flex-grow flex items-center justify-center mb-24">
        Not logged in
      </div>
    );
  }

  return (
    <div className="w-full flex-grow flex items-center justify-center mb-24">
      <div className="text-center">
        <UserIcon size={64} className="mx-auto mb-4 text-gray-400" />
        <h2 className="text-xl font-medium">{user.name}</h2>
        <span className="truncate text-xs">{user.email}</span>
        <div
          className="w-[95%] h-10 mt-4 bg-dark-blue flex justify-around items-center rounded-full text-cream-white cursor-pointer"
          onClick={handleLogout}
        >
          Logout
        </div>
      </div>
    </div>
  );
};

export default UserComponent;
