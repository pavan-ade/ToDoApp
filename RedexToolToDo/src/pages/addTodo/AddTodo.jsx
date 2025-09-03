import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, updateTodo } from "../../features/todo/todoSlice";
import { useNavigate } from "react-router-dom";
import { useId } from "react";

const AddTodo = ({ editTodo, onClose }) => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const uniqId = useId();
  useEffect(() => {
    if (editTodo && editTodo.task) {
      setInput(editTodo.task);
    }
  }, [editTodo?.task]);

  const handleSumbit = (e) => {
    e.preventDefault();
    setInput(input.trim());
    if (!input) {
      setError("Todo cannot be empty!");
      return;
    }
    if (editTodo && editTodo.id) {
      // console.log("comming",input)
      dispatch(updateTodo({ id: editTodo.id, task: input }));
    } else {
      dispatch(addTodo(input));
    }
    if (onClose) onClose();
    setInput("");
    setError("");
  };
  const navigate = useNavigate();

  const handleUpdate = () => {
    if (editTodo && editTodo.id) {
      navigate("/");
    }
  };

  return (
    <>
      <div>
        <form
          onSubmit={handleSumbit}
          className="space-x-3 md:my-4 xs:my-2 md:ml-3 xs:ml-2"
        >
          <div className="md:inline-block xs:block">
            <input
              type="text"
              className={` bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 sm:py-1 sm:px-3 xs:py-0.6 xs:px-4 leading-8 transition-colors duration-200 ease-in-out
            ${editTodo ? "xs:w-full md:w-40" : "xs:w-[90%] md:w-60"} 
            ${
              error
                ? "border-red-500 focus:border-red-500 focus:ring-red-900 xs:w-60 sm:w-full"
                : ""
            }`}
              placeholder="Enter a Todo..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            {error && (
              <span key={uniqId} className="table text-red-500 text-sm mx-auto">
                {error}
              </span>
            )}
          </div>
          <div className="xs:flex xs:justify-center md:inline-block mt-2">
            <button
              type="submit"
              onClick={handleUpdate}
              className="sm:mx-0 text-white bg-indigo-500 border-0 sm:py-2 sm:px-6 xs:py-0.5 xs:px-3 focus:outline-none hover:bg-indigo-600 rounded text-lg xs:text-md"
            >
              {editTodo && editTodo.id ? "Update" : "Add"} ToDo
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddTodo;
