import React from "react";
import { Home, BarChart3, User } from "lucide-react";

interface BottomNavigationProps {
  activePage: string;
  setActivePage: (page: string) => void;
}

const BottomNavigation: React.FC<BottomNavigationProps> = ({ activePage, setActivePage }) => {
  return (
    <div className="w-[95%] h-16 bg-dark-blue flex justify-around items-center fixed bottom-0 rounded-full px-5 mb-5 mx-3">
      <button
        className="flex flex-col items-center justify-center p-2"
        onClick={() => setActivePage("home")}
      >
        <Home
          size={24}
          className={`${activePage === "home" ? "text-white" : "text-gray-400"}`}
        />
        <span
          className={`text-xs mt-1 ${activePage === "home" ? "text-white" : "text-gray-400"}`}
        >
          Home
        </span>
      </button>
      <button
        className="flex flex-col items-center justify-center p-2"
        onClick={() => setActivePage("charts")}
      >
        <BarChart3
          size={24}
          className={`${activePage === "charts" ? "text-white" : "text-gray-400"}`}
        />
        <span
          className={`text-xs mt-1 ${activePage === "charts" ? "text-white" : "text-gray-400"}`}
        >
          Charts
        </span>
      </button>
      <button
        className="flex flex-col items-center justify-center p-2"
        onClick={() => setActivePage("profile")}
      >
        <User
          size={24}
          className={`${activePage === "profile" ? "text-white" : "text-gray-400"}`}
        />
        <span
          className={`text-xs mt-1 ${activePage === "profile" ? "text-white" : "text-gray-400"}`}
        >
          Profile
        </span>
      </button>
    </div>
  );
};

export default BottomNavigation;