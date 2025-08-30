import React, { useEffect, useState } from "react";
import { useId } from "react";
import { Link, Route, useNavigate } from "react-router-dom";
const SideBar = () => {
  const navigator = useNavigate();
  const [screen, setScreen] = useState("64");
  const tabs = [
    { label: "All", route: "/" },
    { label: "Ready to Start", route: "/readytostart" },
    { label: "In Progress", route: "/inprogress" },
    { label: "On Hold", route: "/onhold" },
    { label: "Completed", route: "/completed" },
    { label: "Skipped / Cancelled", route: "/skipped/cancelled" },
  ];
  const [status, setStatus] = useState(tabs);
  const [activeStatus, setActionStatus] = useState("All");
  const id = useId();
  const handleStatus = (label) => {
    // console.log(label);
    setActionStatus(label);
  };
  useEffect(() => {
    if ("All" === activeStatus) {
      navigator("/");
    }
  }, [activeStatus]);
  return (
    <div className={`w-${screen} bg-gray-600 text-white text-xl flex flex-col`}>
      <button
        onClick={() => setStatus(status.length == 0 ? tabs : [])}
        className="mt-6 ml-4"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className="w-10 h-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5m-16.5 5.25h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
      <aside>
        <nav className="text-left my-3">
          {status.map(({ label, route }, idx) => (
            <li
              key={id + idx}
              className={`list-none px-2 py-1 hover:bg-gray-800 cursor-pointer rounded ${
                activeStatus == label ? "bg-gray-800 text-white " : ""
              } `}
              onClick={() => handleStatus(label)}
            >
              <Link to={route}>{label}</Link>
            </li>
          ))}
        </nav>
      </aside>
    </div>
  );
};

export default SideBar;
