import { SquarePlus, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SearchUI = ({ searchValue, setSearchValue }) => {
  const navigate = useNavigate();

  return (
    <div className="px-3 py-2 flex gap-x-3 justify-end">
      <div className="relative md:w-[20%] w-[40%]">
        <Search className="absolute left-2 text-white top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
        <input
          type="text"
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder={`Please search...`}
          className="w-full py-1 px-2 pl-8 border-0 outline-none bg-gray-600 text-white dark:bg-white dark:text-black rounded"
          value={searchValue}
        />
      </div>
      <button
        onClick={() => navigate("/addtodo")}
        className="right-10 bg-blue-600 py-1 md:px-3 px-2 text-white rounded"
      >
        <SquarePlus className="w-6 h-6" />
      </button>
    </div>
  );
};

export default SearchUI;
