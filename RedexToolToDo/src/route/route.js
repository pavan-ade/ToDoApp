import { createBrowserRouter } from "react-router-dom";
import Layout from "../Pages/layout/Layout";
import AddTodo from "../components/addTodo/AddTodo";
import UpdateTodo from "../pages/updateToDo/UpdateTodo";
import DelateTodo from "../pages/delateTodo/DelateTodo";
import ErrorPage from "../pages/errorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        path: "/addTodo",
        Component: AddTodo,
      },
      {
        path: "/editTodo/:id",
        Component: UpdateTodo,
      },
      {
        path: "/deleteTodo/:id",
        Component: DelateTodo,
      }
    ],
  },{
    path: "*",
    Component: ErrorPage
  }
]);

export default router;
