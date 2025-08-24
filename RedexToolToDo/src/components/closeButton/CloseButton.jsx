import React from "react";
import { Link } from "react-router-dom";

const CloseButton = ({path}) => {
  return (
    <Link to={path??"/"}>
      <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
        ✖
      </button>
    </Link>
  );
};

export default CloseButton;
