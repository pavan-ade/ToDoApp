import Footer from "../../components/footer/Footer";
import ThemeContent from "../../components/themeContent/ThemeContent";
import AddTodo from "../addTodo/AddTodo";
import Todo from "../todo/Todo";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div className="h-screen flex gap-1">
        <SideBar />
        <div className=" flex-1 overflow-y-auto bg-gray-100 dark:bg-gray-600">
          <div className="sticky py-2 top-0 w-full bg-white dark:bg-gray-600 shadow-md z-50">
            <h1 className="text-[50px] font-bold text-center ">Todo App</h1>
            <ThemeContent />
            <AddTodo />
          </div>
          <div>
            <Outlet />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
