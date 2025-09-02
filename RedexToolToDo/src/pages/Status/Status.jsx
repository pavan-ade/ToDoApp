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
      clr: "green",
      navigateLink: "/updateStatus",
    },
    {
      tbnName: "edit",
      id: 124,
      Btnlabel: "Update Task",
      icon: Edit,
      clr: "blue",
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
    <div>
      <ul>
        {todos
          .filter((todo) => {
            const status = todo.status ?? "Skipped / Cancelled";
            return status === activeTab;
          })
          .map(({ id, task, status }) => (
            <li
              className=" h-18 my-0.5 flex justify-between items-center bg-zinc-800 px-1 py-2 rounded"
              key={id}
            >
              <div className="text-white text-lg w-[200px] md:w-[150px] overflow-x-hidden text-ellipsis">
                {task}
              </div>
              <div className="text-white w-[200px] md:w-[150px]">
                <label className="font-bold">Status : </label>
                <span className="text-sm">{status ?? "Select Status"}</span>
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

export default Status;
