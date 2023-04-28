import React, { useState, useRef, useEffect } from "react";
import TodoStyle from "../styles/Todo.module.css";
import Input from "./Input.js";
import Task from "./Task.js";

function Todo() {
  const task = useRef();
  const [tasks, setTasks] = useState([
    {
      id: 0,
      title: "Buy milk",
      complete: true,
    },
    {
      id: 1,
      title: "Complete todo app",
      complete: false,
    },
    {
      id: 2,
      title: "Go through other videos",
      complete: false,
    },
    // {
    //   id: 0,
    //   title: "Buy milk",
    //   complete: false,
    // },
    // {
    //   id: 1,
    //   title: "Complete todo app",
    //   complete: false,
    // },
    // {
    //   id: 2,
    //   title: "Go through other videos",
    //   complete: false,
    // },
    // {
    //   id: 0,
    //   title: "Buy milk",
    //   complete: false,
    // },
    // {
    //   id: 1,
    //   title: "Complete todo app",
    //   complete: false,
    // },
    // {
    //   id: 2,
    //   title: "Go through other videos",
    //   complete: false,
    // },
    // {
    //   id: 0,
    //   title: "Buy milk",
    //   complete: false,
    // },
    // {
    //   id: 1,
    //   title: "Complete todo app",
    //   complete: false,
    // },
    // {
    //   id: 2,
    //   title: "Go through other videos",
    //   complete: false,
    // },
    // {
    //   id: 0,
    //   title: "Buy milk",
    //   complete: false,
    // },
    // {
    //   id: 1,
    //   title: "Complete todo app",
    //   complete: false,
    // },
    // {
    //   id: 2,
    //   title: "Go through other videos",
    //   complete: false,
    // },
    // {
    //   id: 0,
    //   title: "Buy milk",
    //   complete: false,
    // },
    // {
    //   id: 1,
    //   title: "Complete todo app",
    //   complete: false,
    // },
    // {
    //   id: 2,
    //   title: "Go through other videos",
    //   complete: false,
    // },
    // {
    //   id: 0,
    //   title: "Buy milk",
    //   complete: false,
    // },
    // {
    //   id: 1,
    //   title: "Complete todo app",
    //   complete: false,
    // },
    // {
    //   id: 2,
    //   title: "Go through other videos",
    //   complete: false,
    // },
    // {
    //   id: 0,
    //   title: "Buy milk",
    //   complete: false,
    // },
    // {
    //   id: 1,
    //   title: "Complete todo app",
    //   complete: false,
    // },
    // {
    //   id: 2,
    //   title: "Go through other videos",
    //   complete: false,
    // },
  ]);

  const addTask = () => {
    // Adding tasks only if it's not a whitespace or it's not empty
    if (task.current.value.trim()) {
      setTasks([
        ...tasks,
        {
          id: tasks.length ? tasks.at(-1).id + 1 : 0,
          title: task.current.value,
        },
      ]);
      task.current.value = "";
    }
  };

  const deleteTask = (taskId) => {
    let localTasks = tasks.filter((t) => t.id != taskId);
    setTasks(localTasks);
  };

  const toggleTaskComplete = (taskId) => {
    let localTasks = [...tasks];
    localTasks[taskId] = {
      ...localTasks[taskId],
      complete: !localTasks[taskId].complete,
    };
    setTasks(localTasks);
  };

  return (
    <div className={TodoStyle["todo-container"]}>
      <Input ref={task} addTask={addTask} />

      <div className={TodoStyle["task-list"]}>
        {!tasks.length ? (
          <div>You don't have any tasks!</div>
        ) : (
          tasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              toggleTaskComplete={toggleTaskComplete}
              deleteTask={deleteTask}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Todo;
