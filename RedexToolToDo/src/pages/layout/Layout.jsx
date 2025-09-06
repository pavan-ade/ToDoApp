import Footer from "../../components/footer/Footer";
import { Outlet } from "react-router-dom";
import SideBar from "../sidebar/SideBar";
import Header from "../../components/header/Header";

const Layout = () => {
  return (
    <>
      <div className="h-screen flex">
        <SideBar />
        <div className="flex-1 overflow-y-auto bg-gray-100 dark:bg-gray-600">
          <div className="sticky top-0 w-full bg-white dark:bg-gray-600 shadow-md z-50">
            <Header />
          </div>

          {/* <div> */}
          <Outlet />
          {/* </div> */}
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
