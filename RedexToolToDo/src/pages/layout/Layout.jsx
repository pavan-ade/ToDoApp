import Footer from "../../components/footer/Footer";
import ThemeContent from "../../components/themeContent/ThemeContent";
import AddTodo from "../addTodo/AddTodo";
import { Outlet } from "react-router-dom";
import SideBar from "../sidebar/SideBar";
import { useNavigate } from "react-router-dom";
import { SquarePlus } from "lucide-react";
import Todo from "../todo/Todo";
const Layout = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="h-screen flex">
        <SideBar />
        <div className="flex-1 overflow-y-auto bg-gray-100 dark:bg-gray-600">
          {/* Fixed height header */}
          <div className="sticky top-0 w-full bg-white dark:bg-gray-600 shadow-md z-50">
            <div className="relative p-4">
              <h1 className="text-[30px] md:text-[50px] font-bold text-center">
                Todo App
              </h1>
              <ThemeContent />
              <div className="mt-4 p-3 flex gap-x-3 justify-evenly">
                <input
                  type="text"
                  className="w-[60%] py-1 px-2 border-0 outline-none bg-gray-600 text-white dark:bg-white dark:text-black rounded"
                />
                <button
                  onClick={() => navigate("/addtodo")}
                  className="right-10 bg-blue-600 py-1 md:px-3 px-2 text-white rounded"
                >
                  <SquarePlus className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>

          {/* Main content area */}
          <div className="pt-6">
            <Outlet />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Layout;
