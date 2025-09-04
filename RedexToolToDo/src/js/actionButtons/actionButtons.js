import { Edit, RefreshCw, Trash2 } from "lucide-react";

export const ActionBtns = [
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
];
