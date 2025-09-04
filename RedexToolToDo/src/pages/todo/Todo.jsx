import React, { useState } from "react";
import { useSelector } from "react-redux";
import ActionButons from "../../components/actionButons/ActionButons";
import { Edit, RefreshCw, Trash2 } from "lucide-react";

const Todo = () => {
  const todos = useSelector((state) => state.todos);

  const [actionBtns, setActionBtns] = useState([
    {
      tbnName: "update",
      id: 123,
      Btnlabel: "Update Status",
      icon: RefreshCw,
      clr: "bg-green-500 hover:bg-green-600",
      navigateLink: "/updateStatus",
    },
    {
      tbnName: "edit",
      id: 124,
      Btnlabel: "Update Task",
      icon: Edit,
      clr: "bg-blue-500 hover:bg-blue-600",
      navigateLink: "/editTodo",
    },
    {
      tbnName: "delate",
      id: 125,
      Btnlabel: "Delete Task",
      icon: Trash2,
      clr: "bg-red-500 hover:bg-red-600",
      navigateLink: "/deleteTodo",
    },
  ]);
  return (
    <div className="md:mx-3 xs:mx-2 my-4">
      <ul className="list-none ">
        {todos.map(({ id, task, status }) => (
          <li
            className="flex justify-between items-center border-b-8 border-zinc-400 dark:bg-zinc-800 bg-white  md:p-2 md:pb-1 xs:p-2 rounded gap-x-2"
            key={id}
          >
            <div className="dark:text-white xs:w-[100px] md:w-[200px] overflow-x-hidden text-ellipsis">
              {task}
            </div>
            <div className="dark:text-white xs:w-[70px] md:w-[200px]">
              <label className="font-bold">Status : </label>
              <span className="text-sm">{status ?? "Not Updated"}</span>
            </div>
            <div className="md:flex">
              <ActionButons
                actionBtns={actionBtns.map((actionBtn) => ({
                  ...actionBtn,
                  id: id,
                }))}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
