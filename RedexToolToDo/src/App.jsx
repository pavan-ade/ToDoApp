import { Outlet, RouterProvider } from "react-router-dom";
import router from "./route/route";
import { Suspense } from "react";
import "./App.css";
import FallBackLoader from "./components/fallBackLoader/FallBackLoader";

function App() {
  return (
    <Suspense fallback={<FallBackLoader />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
