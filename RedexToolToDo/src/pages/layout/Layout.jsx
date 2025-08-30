import ThemeContent from "../../components/themeContent/ThemeContent";
import AddTodo from "../addTodo/AddTodo";
import SideBar from "../sidebar/SideBar";
import Todo from "../todo/Todo";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="h-screen flex gap-1">
      <SideBar />
      <div className="flex-1 overflow-y-auto p-2 bg-gray-100 dark:bg-gray-600">
        <div className="fixed top-0 w-full h-42 bg-white dark:bg-gray-600 shadow-md z-50">
          <h1 className="text-[50px] font-bold text-center ">Todo App</h1>
          <ThemeContent />
          <AddTodo />
        </div>
        <Todo />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
