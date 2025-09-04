import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ActionButons from "../../components/actionButons/ActionButons";
import { SquarePlus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ActionBtns } from "../../js/actionButtons/actionButtons";

const Todo = () => {
  const todos = useSelector((state) => state.todos);
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();
  const [todoList, setTodoList] = useState(todos);
  useEffect(() => {
    const handler = setTimeout(() => {
      if (searchValue.trim()) {
        const searchedTask = todos.filter(({ task }) => {
          return task.toLowerCase().includes(searchValue.toLowerCase());
        });
        setTodoList(searchedTask);
        // console.log(todoList, "List of Task");
      } else if (!searchValue.trim()) {
        // console.log(searchValue, "trim");
        setTodoList(todos);
        navigate("/");
      }
    }, 3000);

    return () => clearTimeout(handler);
  }, [searchValue]);
  return (
    <div className="md:mx-3 mx-2 my-4">
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
      <hr />
      <ul className="list-none ">
        {todoList.map(({ id, task, status }) => (
          <li
            className="flex justify-between items-center border-b-8 border-zinc-400 dark:bg-zinc-800 bg-white  md:p-2 md:pb-1 xs:p-2 rounded gap-x-2"
            key={id}
          >
            <div className="dark:text-white xs:w-[100px] md:w-[200px] overflow-x-hidden text-ellipsis">
              {task}
            </div>
            <div className="dark:text-white xs:w-[70px] md:w-[200px]">
              <label className="font-bold">Status : </label>
              <span className="text-sm">{status ?? "Not Updated"}</span>
            </div>
            <div className="md:flex">
              <ActionButons
                actionBtns={ActionBtns.map((actionBtn) => ({
                  ...actionBtn,
                  id: id,
                }))}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
