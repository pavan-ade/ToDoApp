import React, { useState } from "react";

const SideBar = () => {
  const [screen, setScreen] = useState("64");
  return (
    <div className={`w-${screen} bg-gray-600 text-white text-xl flex flex-col`}>
      <button
        onClick={() => setScreen(screen == "64" ? "0" : "64")}
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
          <li className="list-none px-2 py-1 hover:bg-gray-800 cursor-pointer rounded ">Read to Start</li>
          <li className="list-none px-2 py-1 hover:bg-gray-800 cursor-pointer rounded ">In Progress</li>
          <li className="list-none px-2 py-1 hover:bg-gray-800 cursor-pointer rounded ">On Hold</li>
          <li className="list-none px-2 py-1 hover:bg-gray-800 cursor-pointer rounded ">Complated</li>
          <li className="list-none px-2 py-1 hover:bg-gray-800 cursor-pointer rounded ">Skipped/Cancelled</li>
        </nav>
      </aside>
    </div>
  );
};

export default SideBar;
