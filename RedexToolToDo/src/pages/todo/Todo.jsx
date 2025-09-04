import React, { useState } from "react";
import { useSelector } from "react-redux";
import ActionButons from "../../components/actionButons/ActionButons";
import { SquarePlus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {ActionBtns} from "../../js/actionButtons/actionButtons";

const Todo = () => {
  const todos = useSelector((state) => state.todos);
  const navigate = useNavigate();
  return (
    <div className="md:mx-3 mx-2 my-4">
     
      <hr />
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
                actionBtns={ActionBtns.map((actionBtn) => ({
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
