import { User } from "lucide-react";

const UserComponent = () => {
  const user = {
    name: "John Doe",
    email: "JohnDoe@gmail.com",
    avatar: "JohnDoe@gmail.com",
  };
  return (
    <div className="w-full flex-grow flex items-center justify-center mb-24">
      <div className="text-center">
        <User size={64} className="mx-auto mb-4 text-gray-400" />
        <h2 className="text-xl font-medium">John Doe</h2>
        <span className="truncate text-xs">{user.email}</span>
        <div className="w-[95%] h-10 mt-4 bg-dark-blue flex justify-around items-center rounded-full text-cream-white">
          Logout
        </div>
      </div>
    </div>
  );
};

export default UserComponent;
