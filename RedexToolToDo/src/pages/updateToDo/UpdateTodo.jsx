import React, { useEffect } from "react";
import { useState } from "react";
import AddTodo from "../addTodo/AddTodo";
import { useParams } from "react-router-dom";
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
    <>
      <AddTodo editTodo={updateTodo} onClose={() => setUpdateTodo(null)} />
    </>
  );
};

export default UpdateTodo;
