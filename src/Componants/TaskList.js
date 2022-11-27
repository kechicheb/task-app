import React from "react";
import { useEffect, useState } from "react";
import NewTaskForm from "./NewTaskForm";
import Item from "./Item";
import Footer from "./Footer";

const getLocalTasks = () => {
  let tasks = localStorage.getItem("Tasks");
  if (tasks) {
    return JSON.parse(localStorage.getItem("Tasks"));
  } else {
    return [];
  }
};
export default function TaskList() {
  const [Text, setText] = useState("");
  const [tasks, setTasks] = useState(getLocalTasks());
  const [isUpdating, setUpdating] = useState("");
  let [error, setError] = useState("");
  window.onload = () => document.querySelector(".input").focus();

  const addUpdateTask = () => {
    if (!Text) {
      setError("Please Enter Task");
      this.preventdefault();
      return;
    } else {
      if (isUpdating === "") {
        setError("");
        const task = {
          id: Date.now(),
          text: Text,
        };
        setTasks([...tasks, task].reverse());
        setText("");
      } else {
        setError("");
        let updateT = [...tasks];
        for (let i = 0; i < updateT.length; i++) {
          if (updateT[i].id === isUpdating) {
            updateT[i].text = Text;
          }
        }
        setTasks(updateT);
        setText("");
        setUpdating("");
      }
    }
  };
  const updateTask = (id, text) => {
    setUpdating(id);
    setText(text);
  };

  function deleteTask(id) {
    const newArray = tasks.filter((task) => task.id !== id);
    setTasks(newArray);
  }
  const allTasks = tasks.map((task, index) => {
    return (
      <div className="task" key={task.id}>
        <Item
          task={task}
          deleteTask={() => deleteTask(task.id)}
          index={index}
          updateTask={() => updateTask(task.id, task.text)}
        />
      </div>
    );
  });
  useEffect(() => {
    localStorage.setItem("Tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <>
      <h1>Todo App</h1>
      <div className="container">
        <NewTaskForm
          Text={Text}
          setText={setText}
          addUpdateTask={addUpdateTask}
          isUpdating={isUpdating}
        />
        <div className="error">{error}</div>
        <div className="tasks">{allTasks}</div>

        <Footer tasks={tasks} setTasks={setTasks} />
      </div>
    </>
  );
}
