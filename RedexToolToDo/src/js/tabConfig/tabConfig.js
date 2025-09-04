import {
  Menu,
  ListTodo,
  PlayCircle,
  Hourglass,
  PauseCircle,
  CheckCircle,
  XCircle,
} from "lucide-react";

export const tabs = [
  "Select Status",
  "Ready to Start",
  "In Progress",
  "On Hold",
  "Completed",
  "Skipped / Cancelled",
];

export const tabConfig = [
  {
    label: "All",
    route: "/",
    icon: ListTodo,
    color: "bg-bondi text-white-400 hover:text-white-500",
    activeColor: "bg-gray-800 font-semibold",
  },
  {
    label: "Ready to Start",
    route: "/readytostart",
    icon: PlayCircle,
    color: "text-white-500 bg-blue-400 hover:text-blue-500",
    activeColor: "bg-gray-800 font-semibold",
  },
  {
    label: "In Progress",
    route: "/inprogress",
    icon: Hourglass,
    color: "text-white-500 bg-yellow-400 hover:text-yellow-500",
    activeColor: "bg-gray-800 font-semibold",
  },
  {
    label: "On Hold",
    route: "/onhold",
    icon: PauseCircle,
    color: "text-white-500 bg-orange-400 hover:text-orange-500",
    activeColor: "bg-gray-800 font-semibold",
  },
  {
    label: "Completed",
    route: "/completed",
    icon: CheckCircle,
    color: "text-white-500 bg-green-400 hover:text-green-500",
    activeColor: "bg-gray-800 font-semibold",
  },
  {
    label: "Skipped / Cancelled",
    route: "/skipped/cancelled",
    icon: XCircle,
    color: "text-white-500 bg-red-600 hover:text-red-500",
    activeColor: "bg-gray-800 font-semibold",
  },
];
