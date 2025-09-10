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
    dispatch(updateTodo(todo));
    navigator(-1);
  };

  useEffect(() => {
    setTodo(todos.find((todo) => todo.id == param.id));
  }, []);
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="md:top-auto xs:top-[-30%] bg-white dark:bg-gray-600 rounded-lg shadow-lg p-3 md:w-full xs:w-[80%] max-w-md relative">
        <p className="text-lg text-center">
          Please update the Status for {todo?.task}?
        </p>
        <CloseButton />
        <div className="xs:flex xs:justify-center mx-auto mt-3">
          <DropDown todo={todo} setTodo={setTodo} />
          <button
            onClick={handleStatus}
            className="text-white bg-indigo-500 border-0  xs:py-0.5 xs:px-3 focus:outline-none hover:bg-indigo-600 rounded text-lg xs:text-md"
          >
            update Status
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoStatus;
