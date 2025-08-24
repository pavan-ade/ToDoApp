import React, { useEffect } from "react";
import { useState } from "react";
import AddTodo from "../../components/addTodo/AddTodo";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import CloseButton from "../../components/closeButton/CloseButton";

const UpdateTodo = () => {
  const [updateTodo, setUpdateTodo] = useState(null);
  const param = useParams();
  // console.log(param, "Param");
  const todos = useSelector((state) => state.todos);
  useEffect(() => {
    setUpdateTodo(todos.find((todo) => todo.id == param.id));
  }, [param.id, todos]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 md:w-full xs:w-[80%] max-w-md relative">
        <p className="text-lg">Please Update Task</p>
        <CloseButton />
        <AddTodo editTodo={updateTodo} onClose={() => setUpdateTodo(null)} />
      </div>
    </div>
  );
};

export default UpdateTodo;
