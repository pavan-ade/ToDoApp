import { useDispatch, useSelector } from "react-redux";
import CloseButton from "../../components/closeButton/CloseButton";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { removeTodo } from "../../features/todo/todoSlice";

const DelateTodo = () => {
  const [updateTodo, setUpdateTodo] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todos);
  const param = useParams();
  const todo = todos.find((todo) => todo.id == param.id);
  useEffect(() => {
    setUpdateTodo(todo);
  }, [param.id, todo]);

  const handleDelete = () => {
    dispatch(removeTodo(updateTodo.id));
    navigate("/");
  };
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white dark:bg-gray-600 rounded-lg shadow-lg p-6 md:w-full xs:w-[80%] max-w-sm relative">
        <p className="text-lg">Do you want to Delete {updateTodo?.task}?</p>
        <CloseButton />
        <div className="pt-3">
          <button
            onClick={handleDelete}
            className="text-white bg-red-500 border-0 py-1 px-4 mx-2 focus:outline-none hover:bg-red-600 rounded text-md"
          >
            Yes
          </button>
          <button
            onClick={() => navigate("/")}
            className="text-white bg-green-500 border-0 py-1 px-4 mx-2 focus:outline-none hover:bg-green-600 rounded text-md"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default DelateTodo;
