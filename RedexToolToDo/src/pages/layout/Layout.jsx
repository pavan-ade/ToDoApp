import ThemeContent from "../../components/themeContent/ThemeContent";
import AddTodo from "../addTodo/AddTodo";
import Todo from "../todo/Todo";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <h1 className="text-[50px] font-bold">Redux Tools</h1>
      <ThemeContent />
      <AddTodo />
      <Todo />
      <Outlet />
    </>
  );
};

export default Layout;
