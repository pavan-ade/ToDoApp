import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, updateTodo } from "../../features/todo/todoSlice";
import { useNavigate, useParams } from "react-router-dom";
import { useId } from "react";
import CloseButton from "../../components/closeButton/CloseButton";
import { tabs } from "../../js/tabConfig/tabConfig";
import DropDown from "../../components/dropDown/DropDown";

const AddTodo = ({ editTodo, onClose }) => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const uniqId = useId();
  const param = useParams();

  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [status, setStatus] = useState(tabs[0]);

  useEffect(() => {
    if (editTodo) {
      setInput(editTodo.task || "");
      setStatus(editTodo.status || tabs[0]);
    } else {
      const existing = todos.find((t) => t.id == param.id);
      if (existing) setStatus(existing.status);
    }
  }, [editTodo, param.id, todos]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimedTask = input.trim();

    if (!trimedTask) {
      setError("Todo cannot be empty!");
      return;
    }

    if (editTodo?.id) {
      dispatch(updateTodo({ id: editTodo.id, task: trimedTask, status }));
    } else {
      dispatch(
        addTodo({
          task: trimedTask,
          status: status === "Select Status" ? null : status,
        })
      );
    }

    if (onClose) onClose();
    setInput("");
    setError("");
    navigate(-1);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white dark:bg-gray-600 rounded-lg shadow-lg p-6 md:w-full xs:w-[80%] max-w-md relative">
        <p className="text-lg">Please add Task</p>
        <CloseButton />

        <form
          onSubmit={handleSubmit}
          className="space-x-3 md:my-4 xs:my-2 md:ml-3 xs:ml-2"
        >
          <div className="md:inline-block xs:block">
            <input
              type="text"
              className={`bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 sm:py-1 sm:px-3 xs:py-0.6 xs:px-4 leading-8 transition-colors duration-200 ease-in-out
              ${editTodo ? "xs:w-full md:w-40" : "xs:w-[90%] md:w-60"}
              ${
                error
                  ? "border-red-500 focus:border-red-500 focus:ring-red-900 xs:w-60 sm:w-full"
                  : ""
              }`}
              placeholder="Enter a Todo..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />

            {error && (
              <span key={uniqId} className="table text-red-500 text-sm mx-auto">
                {error}
              </span>
            )}
            <DropDown status={status} setStatus={setStatus} />
          </div>

          <div className="xs:flex xs:justify-center md:inline-block mt-2">
            <button
              type="submit"
              className="sm:mx-0 text-white bg-indigo-500 border-0 sm:py-2 sm:px-6 xs:py-0.5 xs:px-3 focus:outline-none hover:bg-indigo-600 rounded text-lg xs:text-md"
            >
              {editTodo?.id ? "Update" : "Add"} ToDo
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTodo;
