import { Outlet, RouterProvider } from "react-router-dom";
import router from "./route/route";
import "./App.css";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
