import React, { useEffect, useId, useState } from "react";
import CloseButton from "../../components/closeButton/CloseButton";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateTodo } from "../../features/todo/todoSlice";
import { useNavigate } from "react-router-dom";

const TodoStatus = () => {
  const [todo, setTodo] = useState(null);
  const todos = useSelector((state) => state.todos);
  const param = useParams();
  const uniqId = useId();
  const dispatch = useDispatch();
  const navigator = useNavigate();

  const [status, setStatus] = useState([
    "Select Status",
    "Ready to Start",
    "In Progress",
    "On Hold",
    "Completed",
    "Skipped / Cancelled",
  ]);
  const handleStatus = () => {
    // console.log(JSON.stringify(todo));
    dispatch(updateTodo(todo));
    navigator("/");
  };

  useEffect(() => {
    setTodo(todos.find((todo) => todo.id == param.id));
  }, []);
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white dark:bg-gray-600 rounded-lg shadow-lg p-6 md:w-full xs:w-[80%] max-w-sm relative">
        <p className="text-lg">Please update the Status for {todo?.task}?</p>
        <CloseButton />
        <select
          onChange={(e) => {
            setTodo({ id: todo.id, task: todo.task, status: e.target.value });
          }}
          className="appearance-none bg-gray-600 dark:bg-gray-400 rounded border focus:border-white  focus:outline-none focus:ring-0 focus:border-gray-500 text-base outline-none text-gray-100 py-1 px-3 xs:py-2 xs:px-4 mr-3 mt-4 leading-8 transition-colors duration-200 ease-in-out"
        >
          {status.map((status, index) => (
            <option
              key={uniqId + index}
              value={status}
              disabled={index == 0 ? true : false}
            >
              {status}
            </option>
          ))}
        </select>

        <button
          onClick={handleStatus}
          className="xs:m-3 sm:m-0 text-white bg-indigo-500 border-0 py-2 px-6 xs:py-2 xs:px-2 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        >
          update Status
        </button>
      </div>
    </div>
  );
};

export default TodoStatus;
