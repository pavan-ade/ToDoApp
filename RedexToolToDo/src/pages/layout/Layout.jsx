import Footer from "../../components/footer/Footer";
import ThemeContent from "../../components/themeContent/ThemeContent";
import AddTodo from "../addTodo/AddTodo";
import { Outlet } from "react-router-dom";
import SideBar from "../sidebar/SideBar";
const Layout = () => {
  return (
    <>
      <div className="h-screen flex">
        <SideBar />
        <div className="flex-1 overflow-y-auto bg-gray-100 dark:bg-gray-600">
          <div className="sticky py-2 top-0 w-full bg-white dark:bg-gray-600 shadow-md z-50">
            <h1 className="md:text-[50px] font-bold text-center xs:text-[30px]">Todo App</h1>
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
