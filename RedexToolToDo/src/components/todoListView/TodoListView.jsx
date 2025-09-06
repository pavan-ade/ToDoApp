import { ActionBtns } from "../../js/actionButtons/actionButtons";
import ActionButtons from "../actionButtons/ActionButtons";

const TodoListView = ({ todoList }) => {
  const { id, task, status } = todoList;

  return (
    <>
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
          <ActionButtons
            actionBtns={ActionBtns.map((actionBtn) => ({
              ...actionBtn,
              id: id,
            }))}
          />
        </div>
      </li>
    </>
  );
};

export default TodoListView;
