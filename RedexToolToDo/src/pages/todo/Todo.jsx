import React, { useState } from "react";
import { useSelector } from "react-redux";
import ActionButons from "../../components/actionButons/ActionButons";

const Todo = () => {
  const todos = useSelector((state) => state.todos);

  const [actionBtns, setActionBtns] = useState([
    {
      tbnName: "update",
      id: 123,
      Btnlabel: "Update Status",
      drawing_inst:
        "M4.5 12a7.5 7.5 0 0112.713-5.303L19.5 3.75m0 0v6h-6m6 8.25a7.5 7.5 0 01-12.713 5.303L4.5 20.25m0 0v-6h6",
      clr: "green",
      navigateLink: "/updateStatus",
    },
    {
      tbnName: "edit",
      id: 124,
      Btnlabel: "Update Task",
      drawing_inst:
        "M16.862 3.487a2.25 2.25 0 113.182 3.182L7.5 19.313l-4.5 1.125 1.125-4.5L16.862 3.487z",
      clr: "blue",
      navigateLink: "/editTodo",
    },
    {
      tbnName: "delate",
      id: 125,
      Btnlabel: "Delete Task",
      drawing_inst:
        "M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0",
      clr: "red",
      navigateLink: "/deleteTodo",
    },
  ]);
  return (
    <div className="mt-40">
      <ul className="list-none mt-3">
        {todos.map(({ id, task, status }) => (
          <li
            className="h-18 my-0.5 flex justify-between items-center bg-zinc-800 px-3 py-3 rounded "
            key={id}
          >
            <div className="text-white w-[200px] overflow-x-hidden text-ellipsis">
              {task}
            </div>
            <div className="text-white w-[200px]">
              <label className="font-bold">Status : </label>
              <span className="text-sm">{status ?? "Not Updated"}</span>
            </div>
            <div>
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
