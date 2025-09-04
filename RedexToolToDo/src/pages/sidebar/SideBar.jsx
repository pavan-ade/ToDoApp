import React, { useEffect, useState } from "react";
import { useId } from "react";
import { Link, Route, useNavigate } from "react-router-dom";
import { tabConfig } from "../../js/tabConfig/tabConfig";
import { Menu } from "lucide-react";

const SideBar = () => {
  const navigator = useNavigate();

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
    <div
      className={`bg-gray-600 dark:bg-gray-800 text-white text-xl flex flex-col gap-1`}
    >
      <button
        onClick={() => setIsIconMunu((prev) => !prev)}
        className="mt-6 mx-2"
      >
        <Menu className="w-10 h-10" />
      </button>
      <hr />
      <aside>
        <nav className="text-left my-3">
          {tabConfig.map(
            ({ label, icon: Icon, route, color, activeColor }, idx) => (
              <li
                key={id + idx}
                className={`list-none px-2 py-1 m-1 hover:bg-gray-800  cursor-pointer rounded ${
                  activeStatus == label ? activeColor : color
                } `}
                onClick={() => handleStatus(label)}
              >
                <Link to={route} className="relative group flex items-center">
                  {isIconsMenu && (
                    <>
                      <Icon className="w-8 h-8" />
                      <span
                        role="tooltip"
                        className={`absolute top-1/2 left-14 -translate-y-1/2
                      bg-gray-900 text-white text-sm font-medium
                      px-2 py-1 rounded shadow-lg
                      opacity-0 group-hover:opacity-100 
                      pointer-events-none transition-opacity duration-200
                      whitespace-nowrap z-[51]`}
                      >
                        {label}
                      </span>
                      <span
                        className={`absolute top-1/2 left-[2.8rem]  -translate-y-1/2
                      w-2 h-2 bg-gray-900 rotate-45
                      opacity-0 group-hover:opacity-100 
                      transition-opacity duration-200 z-[51]`}
                      />
                    </>
                  )}
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
