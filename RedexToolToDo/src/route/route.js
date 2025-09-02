import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const Layout = lazy(() => import("../pages/layout/Layout"));
const AddTodo = lazy(() => import("../pages/addTodo/AddTodo"));
const UpdateTodo = lazy(() => import("../pages/updateToDo/UpdateTodo"));
const DelateTodo = lazy(() => import("../pages/delateTodo/DelateTodo"));
const ErrorPage = lazy(() => import("../pages/errorPage/ErrorPage"));
const TodoStatus = lazy(() => import("../pages/todoStatus/TodoStatus"));
const Status = lazy(() => import("../pages/Status/Status"));
const Todo = lazy(() => import("../pages/todo/Todo"));

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
