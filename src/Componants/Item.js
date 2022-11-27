import React from "react";

export default function Item({ task,updateTask, deleteTask}) {
  return (
    <>
      {" "}
      <p className="text-task">{task.text}</p>
      <div className="btns">
        <span className="edit" onClick={updateTask}>Edit</span>
        <span onClick={deleteTask}>Delete</span>
      </div>
    </>
  );
}
