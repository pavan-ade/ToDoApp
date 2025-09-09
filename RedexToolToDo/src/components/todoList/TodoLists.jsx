import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { handletabLabel } from "../../js/jsUitls/utils";
import { useSelector } from "react-redux";
import TodoListView from "../todoListView/TodoListView";
import EmptyMessage from "../emptyMessage/EmptyMessage";
import SearchUI from "../searchUI/SearchUI";

const TodoLists = () => {
  const todos = useSelector((state) => state.todos);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [searchValue, setSearchValue] = useState("");
  const [activeTab, setActiveTab] = useState(null);
  const [todoLists, setTodoLists] = useState(todos);

  useEffect(() => {
    setTodoLists(todos);
  }, [todos]);
  useEffect(() => {
    const handler = setTimeout(() => {
      if (searchValue.trim()) {
        const searchedTask = todos.filter(({ task }) => {
          return task.toLowerCase().includes(searchValue.toLowerCase());
        });
        setTodoLists(searchedTask);
      } else if (!searchValue.trim()) {
        setTodoLists(todos);
      }
    }, 500);

    return () => clearTimeout(handler);
  }, [searchValue]);

  useEffect(() => {
    const tabLabel = handletabLabel(pathname);
    setActiveTab(tabLabel);
  }, [pathname]);

  const filteredTask = todoLists.filter(({ status }) => {
    const activeStatus = status ?? "Skipped / Cancelled";
    return activeTab === "All" ? true : activeStatus === activeTab;
  });

  return (
    <div className="md:mx-3 mx-2 my-4 mb-14">
      <SearchUI searchValue={searchValue} setSearchValue={setSearchValue} />
      <hr />
      {filteredTask.length > 0 ? (
        <ul className="list-none ">
          {filteredTask.map((todoList) => (
            <TodoListView key={todoList?.id} todoList={todoList} />
          ))}
        </ul>
      ) : (
        <EmptyMessage status={activeTab} />
      )}
    </div>
  );
};

export default TodoLists;
