import React, { useEffect, useState } from "react";
import TaskStyle from "../styles/Task.module.css";

function Task({ task, toggleTaskComplete }) {
  let taskStyleClass = `${TaskStyle.task} flex item-center ${
    task.complete ? TaskStyle["task-complete"] : ""
  }`;
  console.log(task.id, taskStyleClass);

  useEffect(() => {
    console.log("useeffect of task");
  });

  return (
    <div className={taskStyleClass}>
      <input
        type="checkbox"
        id={`checked-checkbox-${task.id}`}
        className="mt-1 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-full focus:ring-blue-500"
        onChange={() => toggleTaskComplete(task.id)}
        checked={task.complete}
      ></input>
      <label htmlFor={`checked-checkbox-${task.id}`} className="ml-2">
        {task.title}
      </label>
    </div>
  );
}

export default Task;
