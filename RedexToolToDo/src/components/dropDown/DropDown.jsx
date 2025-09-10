import { useId } from "react";
import { ChevronDown } from "lucide-react";
import { tabs } from "../../js/tabConfig/tabConfig";
import { useLocation } from "react-router-dom";

const DropDown = ({ status, setStatus, todo, setTodo }) => {
  const uniqId = useId();

  const value = todo ? todo.status : status;
  const { pathname } = useLocation();

  const handleChange = (e) => {
    const val = e.target.value;
    if (todo && setTodo) {
      setTodo({ ...todo, status: val });
    } else if (setStatus) {
      setStatus(val);
    }
  };

  return (
    <div
      className={`relative ${
        pathname.includes("updateStatus") ? "w-[50%] mx-auto" : "w-[30%]"
      }`}
    >
      <select
        value={value ?? ""}
        onChange={handleChange}
        className="appearance-none w-full bg-gray-600 dark:bg-gray-400 rounded border 
                   focus:border-white focus:outline-none focus:ring-0 
                   text-base text-gray-100 py-1 px-3 xs:py-2 xs:px-4 pr-8
                   mr-3 leading-8 transition-colors duration-200 ease-in-out truncate"
      >
        {tabs.map((s, index) => (
          <option key={uniqId + index} value={s} disabled={index === 0}>
            {s}
          </option>
        ))}
      </select>

      <ChevronDown
        size={18}
        className="absolute right-0 top-1/3 -translate-y-1/2 pointer-events-none text-gray-200"
      />
    </div>
  );
};

export default DropDown;
