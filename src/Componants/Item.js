import React from "react";

export default function Item({ task,updateTask, deleteTask, index }) {
  return (
    <>
      {" "}
      <p className="text-task">{task.text}</p>
      <input type="text" className={index} />
      <div className="btns">
        <span onClick={updateTask}>Edit</span>
        <span onClick={deleteTask}>Delete</span>
      </div>
    </>
  );
}
