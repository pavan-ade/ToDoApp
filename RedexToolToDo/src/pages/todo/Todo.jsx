import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import TodoLists from "../../components/todoList/TodoLists";

const Todo = () => {
  return (
    <>
      <TodoLists />
      <Outlet />
    </>
  );
};

export default Todo;
