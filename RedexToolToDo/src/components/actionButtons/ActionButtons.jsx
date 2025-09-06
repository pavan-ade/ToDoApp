import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ActionButtons = ({ actionBtns }) => {
  const navigate = useNavigate();
  return (
    <>
      {actionBtns.map(
        ({ id, Btnlabel, tbnName, icon: Icon, clr, navigateLink }) => (
          <button
            key={tbnName + id}
            onClick={() => navigate(`${navigateLink}/${id}`)}
            className={`text-white ${clr} border-0 md:py-1 md:px-2 xs:px-2 md:mr-1 xs:my-1 focus:outline-none rounded text-md relative group block`}
          >
            <span
              id={`tri-${tbnName + id}}`}
              role="tooltip"
              className={`absolute -top-9 left-1/2 -translate-x-1/2
               bg-gray-900 text-white text-xs font-medium
               px-2 py-1 rounded shadow-lg
               opacity-0 group-hover:opacity-100 group-focus-within:opacity-100
               pointer-events-none transition-opacity duration-200
               whitespace-nowrap z-50`}
            >
              {Btnlabel}
            </span>
            <span
              className={`absolute -top-2 left-1/2 -translate-x-1/2
               w-2 h-2 bg-gray-600 rotate-45
               opacity-0 group-hover:opacity-100 group-focus-within:opacity-100
               transition-opacity duration-200 z-10`}
            />
            <Icon className="md:w-6 md:h-6 xs:w-4 xs:h-4" />
          </button>
        )
      )}
    </>
  );
};

export default ActionButtons;
