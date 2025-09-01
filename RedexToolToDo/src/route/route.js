import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/layout/Layout";
import AddTodo from "../pages/addTodo/AddTodo";
import UpdateTodo from "../pages/updateToDo/UpdateTodo";
import DelateTodo from "../pages/delateTodo/DelateTodo";
import ErrorPage from "../pages/errorPage/ErrorPage";
import TodoStatus from "../pages/todoStatus/TodoStatus";
import Status from "../pages/Status/Status";
import Todo from "../pages/todo/Todo";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        path: "/",
        Component: Todo,
      },
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
      },
      {
        path: "/updateStatus/:id",
        Component: TodoStatus,
      },
      {
        path: "/readytostart",
        Component: Status,
      },
      {
        path: "/inprogress",
        Component: Status,
      },
      {
        path: "/onhold",
        Component: Status,
      },
      {
        path: "/completed",
        Component: Status,
      },
      {
        path: "/skipped/cancelled",
        Component: Status,
      },
    ],
  },
  {
    path: "*",
    Component: ErrorPage,
  },
]);

export default router;
