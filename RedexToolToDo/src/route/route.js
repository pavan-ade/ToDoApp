import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/layout/Layout";
import AddTodo from "../pages/addTodo/AddTodo";
import UpdateTodo from "../pages/updateToDo/UpdateTodo";
import DelateTodo from "../pages/delateTodo/DelateTodo";
import ErrorPage from "../pages/errorPage/ErrorPage";
import TodoStatus from "../pages/todoStatus/TodoStatus";
import ReadyTOStart from "../pages/ready-to-start/ReadyToStart";
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
        Component: ReadyTOStart,
      },
      {
        path: "/inprogress",
        Component: ReadyTOStart,
      },
      {
        path: "/onhold",
        Component: ReadyTOStart,
      },
      {
        path: "/completed",
        Component: ReadyTOStart,
      },
      {
        path: "/skipped/cancelled",
        Component: ReadyTOStart,
      },
    ],
  },
  {
    path: "*",
    Component: ErrorPage,
  },
]);

export default router;
