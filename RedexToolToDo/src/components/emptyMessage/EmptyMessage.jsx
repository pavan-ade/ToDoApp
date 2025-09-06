import React from "react";

const EmptyMessage = ({ status }) => {
  return (
    <div className="text-center text-gray-600 dark:text-gray-300 mt-6 text-lg font-medium">
      🚫{" "}
      {status
        ? `No tasks found related ${
            status.toLowerCase() == "all" ? "Any Status, Please Add More Task" : status
          }.`
        : "No tasks found."}
    </div>
  );
};

export default EmptyMessage;
