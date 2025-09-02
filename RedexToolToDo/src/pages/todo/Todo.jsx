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
      clr: "green",
      navigateLink: "/updateStatus",
    },
    {
      tbnName: "edit",
      id: 124,
      Btnlabel: "Update Task",
      icon: Edit,
      clr: "brandeis",
      navigateLink: "/editTodo",
    },
    {
      tbnName: "delate",
      id: 125,
      Btnlabel: "Delete Task",
      icon: Trash2,
      clr: "red",
      navigateLink: "/deleteTodo",
    },
  ]);
  return (
    <div>
      <ul className="list-none mt-3">
        {todos.map(({ id, task, status }) => (
          <li
            className="my-0.5 flex justify-between items-center bg-zinc-800 md:p-3 xs:p-2 rounded gap-x-2"
            key={id}
          >
            <div className="text-white w-[200px] md:w-[150px] overflow-x-hidden text-ellipsis">
              {task}
            </div>
            <div className="text-white w-[200px] md:w-[150px]">
              <label className="font-bold">Status : </label>
              <span className="text-sm">{status ?? "Not Updated"}</span>
            </div>
            <div className="flex">
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
