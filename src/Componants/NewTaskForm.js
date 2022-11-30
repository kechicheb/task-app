import React from "react";

export default function NewTaskForm({
  Text,
  setText,
  addUpdateTask,
  isUpdating}) {
  return (
    <div className="form">
      <input
        placeholder="✍️ Add task..."
        type="text"
        className="input"
        value={Text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => (e.key === "Enter" ? addUpdateTask() : "")}
      />
      <button className="add" onClick={addUpdateTask}>
        {isUpdating ? "Update" : "Add"}
      </button>
    </div>
  );
}
