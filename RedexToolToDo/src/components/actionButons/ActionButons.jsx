import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ActionButons = ({ actionBtns }) => {
  const navigate = useNavigate();
  return (
    <>
      {actionBtns.map(
        ({ id, Btnlabel, tbnName, drawing_inst, clr, navigateLink }) => (
          <button
            key={tbnName + id}
            onClick={() => navigate(`${navigateLink}/${id}`)}
            className={`text-white bg-${clr}-500 border-0 py-1 px-4 mr-1 focus:outline-none hover:bg-green-600 rounded text-md relative group inline-block`}
          >
            <span
              id={`tri-${tbnName + id}}`}
              role="tooltip"
              className={`absolute -top-9 left-1/2 -translate-x-1/2
               bg-gray-900 text-white text-xs font-medium
               px-2 py-1 rounded shadow-lg
               opacity-0 group-hover:opacity-100 group-focus-within:opacity-100
               pointer-events-none transition-opacity duration-200
               whitespace-nowrap z-20`}
            >
              {Btnlabel}
            </span>
            <span
              className={`absolute -top-2 left-1/2 -translate-x-1/2
               w-2 h-2 bg-gray-900 rotate-45
               opacity-0 group-hover:opacity-100 group-focus-within:opacity-100
               transition-opacity duration-200 z-10`}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={`${drawing_inst}`}
              />
            </svg>
          </button>
        )
      )}
    </>
  );
};

export default ActionButons;
