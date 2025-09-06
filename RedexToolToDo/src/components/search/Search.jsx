import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SquarePlus } from "lucide-react";

const Search = ({ searchValue, setSearchValue }) => {
  const navigate = useNavigate();

  return (
    <div className="px-3 py-2 flex gap-x-3 justify-end">
      <input
        type="text"
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Please search..."
        className="w-[20%] py-1 px-2 border-0 outline-none bg-gray-600 text-white dark:bg-white dark:text-black rounded"
        value={searchValue}
      />
      <button
        onClick={() => navigate("/addtodo")}
        className="right-10 bg-blue-600 py-1 md:px-3 px-2 text-white rounded"
      >
        <SquarePlus className="w-6 h-6" />
      </button>
    </div>
  );
};

export default Search;
