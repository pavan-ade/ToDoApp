import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ActionButons from "../../components/actionButons/ActionButons";
import { useLocation, useParams } from "react-router-dom";
import { Edit, RefreshCw, Trash2 } from "lucide-react";

const Status = () => {
  const { pathname } = useLocation();
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
  const [activeTab, setActiveTab] = useState(null);
  const todos = useSelector((states) => states.todos);
  useEffect(() => {
    if (pathname == "/readytostart") {
      setActiveTab("Ready to Start");
    } else if (pathname == "/inprogress") {
      setActiveTab("In Progress");
    } else if (pathname == "/onhold") {
      setActiveTab("On Hold");
    } else if (pathname == "/completed") {
      setActiveTab("Completed");
    } else if (pathname == "/skipped/cancelled") {
      setActiveTab("Skipped / Cancelled");
    } else {
      console.log(pathname);
      setActionBtns("All");
    }
  }, [pathname, activeTab]);

  return (
    <div className="md:mx-3 xs:mx-2 my-4">
      <ul>
        {todos
          .filter((todo) => {
            const status = todo.status ?? "Skipped / Cancelled";
            return status === activeTab;
          })
          .map(({ id, task, status }) => (
            <li
              className="h-18 flex border-b-8 border-zinc-400 dark:bg-zinc-800 justify-between items-center bg-white px-1 md:pb-1 py-2 rounded"
              key={id}
            >
              <div className="dark:text-white text-lg xs:w-[100px] md:w-[200px] overflow-x-hidden text-ellipsis">
                {task}
              </div>
              <div className="dark:text-white xs:w-[70px] md:w-[200px]">
                <label className="font-bold">Status : </label>
                <span className="text-sm">{status ?? "Select Status"}</span>
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

export default Status;
