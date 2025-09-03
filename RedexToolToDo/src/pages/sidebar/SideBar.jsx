import React, { useEffect, useState } from "react";
import { useId } from "react";
import { Link, Route, useNavigate } from "react-router-dom";
import {
  Menu,
  ListTodo,
  PlayCircle,
  Hourglass,
  PauseCircle,
  CheckCircle,
  XCircle,
} from "lucide-react";
const SideBar = () => {
  const navigator = useNavigate();
  const tabConfig = [
    {
      label: "All",
      route: "/",
      icon: ListTodo,
      color: "bg-bondi text-white-400 hover:text-white-500",
      activeColor: "bg-gray-800 font-semibold",
    },
    {
      label: "Ready to Start",
      route: "/readytostart",
      icon: PlayCircle,
      color: "text-white-500 bg-blue-400 hover:text-blue-500",
      activeColor: "bg-gray-800 font-semibold",
    },
    {
      label: "In Progress",
      route: "/inprogress",
      icon: Hourglass,
      color: "text-white-500 bg-yellow-400 hover:text-yellow-500",
      activeColor: "bg-gray-800 font-semibold",
    },
    {
      label: "On Hold",
      route: "/onhold",
      icon: PauseCircle,
      color: "text-white-500 bg-orange-400 hover:text-orange-500",
      activeColor: "bg-gray-800 font-semibold",
    },
    {
      label: "Completed",
      route: "/completed",
      icon: CheckCircle,
      color: "text-white-500 bg-green-400 hover:text-green-500",
      activeColor: "bg-gray-800 font-semibold",
    },
    {
      label: "Skipped / Cancelled",
      route: "/skipped/cancelled",
      icon: XCircle,
      color: "text-white-500 bg-red-600 hover:text-red-500",
      activeColor: "bg-gray-800 font-semibold",
    },
  ];

  const [status, setStatus] = useState(tabConfig);
  const [activeStatus, setActionStatus] = useState("All");
  const [isIconsMenu, setIsIconMunu] = useState(true);
  const id = useId();
  const handleStatus = (label) => {
    // console.log(label);
    setActionStatus(label);
  };
  useEffect(() => {
    // console.log(isIconsMenu);
    if ("All" === activeStatus) {
      navigator("/");
    }
  }, [activeStatus, isIconsMenu]);
  return (
    <div className={`bg-gray-600 text-white text-xl flex flex-col`}>
      <button
        onClick={() => setIsIconMunu((prev) => !prev)}
        className="mt-6 mx-2"
      >
        <Menu className="w-10 h-10" />
      </button>
      <hr />
      <aside>
        <nav className="text-left my-3">
          {status.map(
            ({ label, icon: Icon, route, color, activeColor }, idx) => (
              <li
                key={id + idx}
                className={`list-none px-2 py-1 m-1 hover:bg-gray-800  cursor-pointer rounded ${
                  activeStatus == label ? activeColor : color
                } `}
                onClick={() => handleStatus(label)}
              >
                <Link to={route}>
                  {isIconsMenu && <Icon className="w-8 h-8" />}
                  {isIconsMenu ? "" : label}
                </Link>
              </li>
            )
          )}
        </nav>
      </aside>
    </div>
  );
};

export default SideBar;
