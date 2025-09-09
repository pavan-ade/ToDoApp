import React, { useEffect, useState } from "react";
import CloseButton from "../../components/closeButton/CloseButton";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateTodo } from "../../features/todo/todoSlice";
import { useNavigate } from "react-router-dom";
import DropDown from "../../components/dropDown/DropDown";

const TodoStatus = () => {
  const [todo, setTodo] = useState(null);
  const todos = useSelector((state) => state.todos);
  const param = useParams();
  const dispatch = useDispatch();
  const navigator = useNavigate();

  const handleStatus = () => {
    // console.log(JSON.stringify(todo));
    dispatch(updateTodo(todo));
    navigator(-1);
  };

  useEffect(() => {
    setTodo(todos.find((todo) => todo.id == param.id));
  }, []);
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white dark:bg-gray-600 rounded-lg shadow-lg p-6 md:w-full xs:w-[80%] max-w-md relative">
        <p className="text-lg">Please update the Status for {todo?.task}?</p>
        <CloseButton />
        <DropDown todo={todo} setTodo={setTodo} />
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
