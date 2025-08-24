import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, updateTodo } from "../../features/todo/todoSlice";
import { Link, useNavigate } from "react-router-dom";

const AddTodo = ({ editTodo, onClose }) => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (editTodo && editTodo.task) {
      setInput(editTodo.task);
    }
  }, [editTodo?.task]);

  const handleSumbit = (e) => {
    e.preventDefault();
    // console.log("click");
    if (editTodo && editTodo.id) {
      // console.log("comming",input)
      dispatch(updateTodo({ id: editTodo.id, task: input }));
    } else {
      dispatch(addTodo(input));
    }
    if (onClose) onClose();
    setInput("");
  };
  const navigate = useNavigate();

  const handleUpdate = () => {
    if (editTodo && editTodo.id) {
      navigate("/");
    }
  };

  return (
    <>
      <form onSubmit={handleSumbit} className="space-x-3 mt-8">
        <input
          type="text"
          className={` bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 xs:py-2 xs:px-4 leading-8 transition-colors duration-200 ease-in-out
          ${editTodo ? "xs:w-50" : "xs:w-60"}`}
          placeholder="Enter a Todo..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          onClick={handleUpdate}
          className="xs:m-3 sm:m-0 text-white bg-indigo-500 border-0 py-2 px-6 xs:py-2 xs:px-2 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        >
          {editTodo && editTodo.id ? "update" : "Add"} ToDo
        </button>
      </form>
    </>
  );
};

export default AddTodo;
