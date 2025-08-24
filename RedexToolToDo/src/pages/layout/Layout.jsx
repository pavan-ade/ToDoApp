import React from "react";
import AddTodo from "../../components/addTodo/AddTodo"
import Todo from "../../components/todo/Todo"
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <h1 className="text-[50px] font-bold">Redux Tools</h1>
      <AddTodo />
      <Todo />
      <Outlet />
    </>
  );
};

export default Layout;
